import React from 'react';
import 'tachyons';


const Search = props => (
<div className="row center">
  <div className="col s12 m12 l12">
    <article className="center mw6 mw8-ns br3 hidden ba b--black-10 mv4">
    <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3 blue-grey darken-1">Search</h1>
    <div className="pa3 bt b--black-10">
      <form className="pa4 black-80">
        <div className="">
          <label htmlFor="topic" className="f6 b db mb2">Topic</label>
          <input id="topic" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="topic-desc"/>
        </div>
        <div className="">
          <label htmlFor="sYear" className="f6 b db mb2">Start Year</label>
          <input id="sYear" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="sYear-desc"/>
        </div>
        <div className="">
          <label htmlFor="eYear" className="f6 b db mb2">End Year</label>
          <input id="eYear" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="eYear-desc"/>
        </div>
        <button className="btn waves-effect waves-light" type="submit" name="action" onClick={props.getData}>Submit
    <i className="material-icons right">send</i>
  </button>
      </form>
    </div>
  </article>
  </div>
</div>
);

export default Search;