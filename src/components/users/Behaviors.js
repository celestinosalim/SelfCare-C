import React from 'react';
import { Panel } from 'react-bootstrap';

const Behaviors = ({behaviors}) => {
  return (
    <div className="BehaviorPanel">
      {behaviors.map(behavior =>
        <Panel bsStyle="info" key={behavior.id}>
          <Panel.Heading>
            <Panel.Title>{behavior.name}</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <p>{behavior.details}</p>
            <p>The following are the common symptoms we track:</p>
            {behavior.conditions.map(condition =>
              <ul key={condition.id}>
                <li key={condition.id}>{condition.name}</li>
              </ul>
            )}
          </Panel.Body>
        </Panel>
      )}
    </div>
  )
};

export default Behaviors;
