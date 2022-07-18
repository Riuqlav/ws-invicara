import React from "react";
import { Button, Container, Table } from "reactstrap";
import { useState } from "react";
import { v4 as _id } from "uuid";
import Countdown from "react-countdown";
import { usersApi } from "../util/usersApi";
import "bootstrap/dist/css/bootstrap.min.css";
import "../util/Dots.css";

const DisplayWorkstations = () => {
  const [workstations, setWorkstations] = useState(usersApi);

  const handleClick = (id) => {
    setWorkstations(
      workstations.map((workstation) =>
        workstation.id === id
          ? {
            ...workstation,
            currentReservedStatus: !workstation.currentReservedStatus,
            /* I am assuming the rules for the date/time picker (min and max) are already associated with each user profile */

            bookedTime: <Countdown date={Date.now() + 1.8e6} />,
          }
          : workstation
      )
    );
  };

  return (
    <div className="mt-5">
      <Container>
        <Table primary striped bordered hover>
          <thead>
            <tr>
              <th>Workstation List</th>
              <th>User</th>
              <th>Desk Ref.</th>
              <th>Time Left </th>
              <th>Book Now</th>
            </tr>
          </thead>
          <tbody>
            {workstations.map((workstation) => (
              <tr>
                <td>
                  {workstation.currentReservedStatus ? (
                    <span className="dotAvailable">
                      <div
                        className="dotMiddle"
                      />
                    </span>
                  ) : (
                    <span className="dotUnavailable">
                      <div
                        className="dotMiddle"
                      />
                    </span>
                  )}
                </td>
                {/* I am assuming some auth would be required for this tool, which would show the users name. */}
                <td>
                  {workstation.currentReservedStatus
                    ? "Desk Available"
                    : workstation.user}
                </td>
                <td>{workstation.deskNumber}</td>
                <td>{workstation.bookedTime}</td>
                <td>
                  {workstation.currentReservedStatus ? (
                    <Button
                      color="primary"
                      onClick={() => handleClick(workstation.id)}
                    >
                      Book
                    </Button>
                  ) : (
                    <Button color="secondary">Reserved</Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default DisplayWorkstations;
