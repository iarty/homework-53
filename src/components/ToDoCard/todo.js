import React, { } from 'react'

export default props => {
  let classes = ['list-group-item'];
  props.completed ? classes.push('list-group-item-success') : classes.push('list-group-item-secondary')
  return (
    <div className="mt-2" style={{ width: "555px", textDecoration: 'none' }}>
      <div className={classes.join(' ')}>
        <div className="d-flex w-100 justify-content-between">
          <p className="mb-1">{props.value}</p>
          <div className="text-right">
            <a style={{ color: "#fff" }} className="mr-2" href="/#" onClick={props.onCompleted}><i className="fas fa-check"></i></a>
            <a style={{ color: "#fff" }} href="/#" onClick={props.onDelete}><i className="fas fa-trash-alt" href="/#"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}
