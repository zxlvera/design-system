import React from 'react'

const Button = () => {
  return (
    <>
      <h1>Buttons</h1>
      <div className="content">
        <div className="content-2cols">
          <div className="buttonBox">
            <code>&lt;Button /&gt;</code>
            <button className="btn__normal">Default</button>
          </div>
          <div className="buttonBox">
            <code>&:hover, &:focus</code>
            <button className="btn__normal-hf">Default</button>
          </div>
          <div className="buttonBox">
            <code>&lt;Button variant="outline" /&gt;</code>
            <button className="btn__outline">Default</button>
          </div>
          <div className="buttonBox">
            <code>&:hover, &:focus</code>
            <button className="btn__outline-hf">Default</button>
          </div>
          <div className="buttonBox">
            <code>&lt;Button variant="text" /&gt;</code>
            <button className="btn__text">Default</button>
          </div>
          <div className="buttonBox">
            <code>&:hover, &:focus</code>
            <button className="btn__text-hf">Default</button>
          </div>
          <div className="buttonBox">
            <code>&lt;Button disableShadow /&gt;</code>
            <button className="btn__disableShadow">Default</button>
          </div>
          <div className="buttonBox">
          </div>
          <div className="buttonBox">
            <code>&lt;Button disabled /&gt;</code>
            <button className="btn__disabled">Disabled</button>
          </div>
          <div className="buttonBox">
            <code>&lt;Button variant="text" disabled /&gt;</code>
            <button className="btn__disabled-hf">Disabled</button>
          </div>
          <div className="buttonBox">
            <code>&lt;Button startIcon="local_grocery_store" /&gt;</code>
            <button className="btn__cart">
              <span><i class="material-icons md-14">add_shopping_cart</i>&nbsp;&nbsp;Default</span></button>
          </div>
          <div className="buttonBox">
            <code>&lt;Button endIcon="local_grocery_store" /&gt;</code>
            <button className="btn__cart"><span>Default&nbsp;&nbsp; <i class="material-icons md-14">add_shopping_cart</i></span></button>
          </div>
        </div>
        <div className="content-3cols">
          <div className="buttonBox">
            <code>&lt;Button size="sm" /&gt;</code>
            <button className="btn-sm">Default</button>
          </div>
          <div className="buttonBox">
            <code>&lt;Button size="md" /&gt;</code>
            <button className="btn-md">Default</button>
          </div>
          <div className="buttonBox">
            <code>&lt;Button size="lg" /&gt;</code>
            <button className="btn-lg">Default</button>
          </div>
        </div>
        <div className="content-4cols">
          <div className="buttonBox">
            <code>&lt;Button color="default" /&gt;</code>
            <button className="btn__normal">Default</button>
          </div>
          <div className="buttonBox">
            <code>&lt;Button color="primary" /&gt;</code>
            <button className="btn-pri">Default</button>
          </div>
          <div className="buttonBox">
            <code>&lt;Button color="secondary"/&gt;</code>
            <button className="btn-sec">Secondary</button>
          </div>
          <div className="buttonBox">
            <code>&lt;Button color="danger" /&gt;</code>
            <button className="btn-danger">Danger</button>
          </div>
        </div>
        <div className="content-4cols">
          <div className="buttonBox">
            <code>&:hover, &:focus</code>
            <button className="btn__normal-hf">Default</button>
          </div>
          <div className="buttonBox">
            <code></code>
            <button className="btn-pri-hf">Default</button>
          </div>
          <div className="buttonBox">
            <code></code>
            <button className="btn-sec-hf">Secondary</button>
          </div>
          <div className="buttonBox">
            <code></code>
            <button className="btn-danger-hf">Danger</button>
          </div>
        </div>
        <code className="credits">Icons: https://material.io/resources/icons/?style=round</code>
        <footer>zxlvera @ Devchallenges.io</footer>
      </div>
    </>
  )
}

export default Button
