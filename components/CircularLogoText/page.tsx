import React from 'react'
import './page.scss'

const CircularLogoText = () => {
  return (
    <div className="buckSkinLogo__container">
      <div className="logo_cont abs_center">
        <div className="logo_box">
          {/*   outer rings   */}
          <div className="outer_ring abs_center"></div>
          <div className="middle_ring abs_center"></div>
          
          {/*   inner ring    */}
          <div className="inner_ring abs_center"></div>
          
          {/*   main text   */}
          <div className="Buckskin">Buckskin</div>
          
          {/*   Upper curved text   */}
          <div className="curve_text top">
            <div className="letter"> W </div>
            <div className="letter"> E </div>
            <div className="letter"> B </div>
            <div className="letter">   </div>
            <div className="letter"> D </div>
            <div className="letter"> E </div>
            <div className="letter"> V </div>
            <div className="letter"> E </div>
            <div className="letter"> L </div>
            <div className="letter"> O </div>
            <div className="letter"> P </div>
            <div className="letter"> E </div>
            <div className="letter"> R </div>

          </div>
          
          {/*   Lower curved text   */}
          <div className="curve_text bottom">
            <div className="letter"> U </div>
            <div className="letter"> t </div>
            <div className="letter"> a </div>
            <div className="letter"> h </div>
            <div className="letter">   </div>
            <div className="letter"> / </div>
            <div className="letter">   </div>
            <div className="letter"> A </div>
            <div className="letter"> r </div>
            <div className="letter"> i </div>
            <div className="letter"> z </div>
            <div className="letter"> o </div>
            <div className="letter"> n </div>
            <div className="letter"> a </div>
            <div className="letter"> . </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LogoComp