import React from 'react'

export default function CountreWrapper(props) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-20">{props.children}</div>
  )
}
