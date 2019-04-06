import React from "react"
function footer({ author = "Tepy Thai" }) {
  return (
    <footer
      style={{
        position: "absolute",
        bottom: 0,
        marginBottom: "16px",
      }}
    >
      © {new Date().getFullYear()}, Built by
      {` `}
      <a href="#">{author}</a>
    </footer>
  )
}

export default footer
