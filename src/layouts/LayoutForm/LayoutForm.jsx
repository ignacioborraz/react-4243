import React from 'react'
import Footer from '../../components/Footer/Footer'
import './layoutForm.css'

export default function LayoutForm(props) {
  return (
    <div className="app-container-form">
        {props.children}
        <Footer />
    </div>
  )
}
