//main.js
import React from 'react';
import ReactDOM from 'react-dom';
import FaLeaf from 'react-icons/lib/fa/leaf';
import FaQq from 'react-icons/lib/fa/qq';
import FaRa from 'react-icons/lib/fa/ra';
import FaAtm from '../build/icons/atm';
import FaResume from '../build/icons/resume';


class Main extends React.Component {
  render() {
    return (
        <div className="main_box">
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-sm-4 col-xs-6">
                <div className="app_box">
                  <i className="iconfont icon-atm"></i>
                </div>
              </div>
              <div className="col-md-2 col-sm-4 col-xs-6">
                <div className="app_box">
                  <i className="iconfont icon-hot"></i>
                </div>
              </div>
              <div className="col-md-2 col-sm-4 col-xs-6">
                <div className="app_box">
                  <FaAtm height="9em" width="9em"/>
                </div>
              </div>
              <div className="col-md-2 col-sm-4 col-xs-6">
                <div className="app_box">
                  <FaResume height="9em" width="9em"/>
                </div>
              </div>
              <div className="col-md-2 col-sm-4 col-xs-6">
                <div className="app_box">
                  <FaQq height="9em" width="9em"/>
                </div>
              </div>
              <div className="col-md-2 col-sm-4 col-xs-6">
                <div className="app_box">
                  <FaRa height="9em" width="9em"/>
                </div>
              </div>
              <div className="col-md-2 col-sm-4 col-xs-6">
                <div className="app_box">
                  <FaLeaf height="9em" width="9em"/>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('content')
);
