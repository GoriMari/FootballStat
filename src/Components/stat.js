import React from "react";

const Stat = props => (
    <div>
    { props.count &&
      <div>
        <table id="scores" className="matches">
          <thead className="scoresheader">
            <tr>
              <th>Area</th>
              <th>Code</th>
              <th>Name</th>
              <th>Plan</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>{props.area}</td>
              <td>{props.code}</td>
              <td>{props.name}</td>
              <td>{props.plan}</td>
          </tr>
          <tr>
            <td colSpan={4}><form onSubmit={props.param}><button>Показать следующий</button></form></td>
          </tr>
          </tbody>
        </table> 
      </div>     
    }
    <p>{props.error}</p>
    </div>
  );

export default Stat;