import React, { Component } from 'react';
import 'tachyons';

class Results extends Component {


  render() {
    return (
    <div className="row center">
      <div className="col s12 m12 l12">
        <article class="center mw6 mw8-ns br3 hidden ba b--black-10 mv4">
          <h1 class="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3 blue-grey darken-1">Results</h1>
          <div class="pa3 bt b--black-10">
            <p class="f6 f5-ns lh-copy measure"> Stuff here</p>
          </div>
        </article>
      </div>
    </div>
    )
  }
}

export default Results;