import React from 'react';
import { Panel } from 'react-bootstrap';

const Behaviors = (props) => {
  return (
    <div className="BehaviorPanel">
      {props.behaviors.map(behavior =>
        <Panel id="collapsible-panel-example-3" defaultExpanded key={behavior.id}>
          <Panel.Heading>
            <Panel.Title toggle>{behavior.name}</Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <p>{behavior.details}</p>
              <p>The following are the common symptoms we track:</p>
              {behavior.conditions.map((condition, index )=>
                <ul>
                  <li key={index}>{condition.name}</li>
                </ul>
              )}
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
      )}
    </div>
  )
};

export default Behaviors;
