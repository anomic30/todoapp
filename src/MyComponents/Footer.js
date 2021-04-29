import React from 'react'

export const Footer = () => {
    let myStyle = {
        position: "fixed",
        left: "0px",
        bottom: "0px",
        width: "100%",
        marginBottom: "0px",
        paddingTop: "0px",
        paddingBottom: "0px",

    }
    let pStyle = {
        marginBottom: "0px",
        color: "#84868a",
    }
    return (
        <div className="bg-dark text-light py-3" style={myStyle}>
            <p className="text-center" style={pStyle}>
            Copyright &copy; Anom
            </p>
        </div>
    )
}
