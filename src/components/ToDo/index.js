import React, {
  useContext, useEffect, useReducer, useState,
} from 'react'
import ClearIcon from '@material-ui/icons/Clear'
import { useWindowDimensions } from '../../tools/hooks'
import { UserContext } from '../../tools/api'
import { Button } from '..'
import colorReducer from './colorReducer'
import styles from './ToDo.module.scss'

export default function ToDo() {
  const [inputValue, setInputValue] = useState('')
  const [toDoList, setToDoList] = useState([])
  const [uid, setUid] = useState(0)
  const [isView, setIsView] = useState(false)
  const [listColor, dispatchColor] = useReducer(colorReducer, null)

  // Destructuring useWindowDimensions hooks value
  const { windowWidth } = useWindowDimensions()

  // Destructuring useContext value
  const { showColorPicker } = useContext(UserContext)

  const handleInput = (e) => {
    e.preventDefault()
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setToDoList([
      ...toDoList,
      {
        id   : uid,
        input: inputValue,
      },
    ])
    setUid(uid + 1)
    setInputValue('')
  }

  const handleListView = () => {
    setIsView(!isView)
  }

  const handleBrush = (e) => {
    e.preventDefault()
    const brushColor = e.target.value
    const targetElement = e.target.parentElement.parentElement
    targetElement.style.backgroundColor = brushColor
  }

  const handleRemover = (e) => {
    e.preventDefault()
    // eslint-disable-next-line no-underscore-dangle
    const _uid = e.target.id
    setToDoList(toDoList.filter((element) => element.id !== Number(_uid)))
  }

  const handleResetBtn = () => {
    // eslint-disable-next-line no-alert
    const answer = window.confirm('This will clear your Todo List?')
    if (answer) {
      setUid(0)
      setToDoList([])
      setIsView(false)
      setInputValue('')
      dispatchColor({
        type: 'resetColor',
        data: null,
      })
    }
  }

  useEffect(() => {
    if (windowWidth < 570) {
      setIsView(false)
    }
  }, [windowWidth])

  return (
    <div className={styles.ToDo_wrapper}>
      <form onSubmit={handleSubmit} className={styles.form_container}>
        <input
          className={styles.inputForm_element}
          type="text"
          placeholder="Enter your task here"
          onChange={handleInput}
          value={inputValue}
          required
        />

        {inputValue.length > 0 && (
          <ClearIcon
            className={styles.clearInput_icon}
            onClick={() => setInputValue('')}
          />
        )}
      </form>

      {toDoList.length > 0 && (
        <div className={styles.taskList_container}>
          <div className={styles.tools_container}>
            {showColorPicker && (
              <input
                type="color"
                className={styles.colorPicker}
                title="Pick a Color"
                value={listColor === null ? '#4682b4' : listColor}
                onChange={(e) => dispatchColor({
                  type: 'fillListColor',
                  data: e.target.value,
                })}
              />
            )}

            <Button
              title="View as"
              className={styles.viewAs_mbl}
              onClick={handleListView}
            />

            <Button
              title="Reset"
              onClick={handleResetBtn}
            />
          </div>

          <ul className={isView ? styles.gridView : ''}>
            {toDoList.map((element, index) => (
              <li
                key={element.id}
                id={element.id}
                style={{ backgroundColor: listColor }}
              >
                <div>
                  <span>
                    {index + 1}
                    .&nbsp;
                  </span>
                  <span>{element.input}</span>
                </div>

                <div className={styles.customListTools_container}>
                  <input
                    id={element.id}
                    type="color"
                    title="Pick a Color"
                    className={styles.customColorPicker}
                    onChange={(e) => handleBrush(e)}
                  />

                  <button
                    type="button"
                    id={element.id}
                    className={styles.removeButton}
                    title="Delete"
                    onClick={handleRemover}
                  >
                    X
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
