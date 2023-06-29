import "./Table.css";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
import { LeaderContext } from "../../pages/Admin2";
import matches from "../../data/matches";

const sxStyle = {
  padding: "0px",
  color: "red",
};

const makeStyles = (status) => {
  if (status === 100) {
    return { background: "rgb(145 254 159 / 47%)", color: "green" };
  } else if (status === 0) {
    return { background: "#ffadad8f", color: "red" };
  } else {
    return { background: "#ffadad8f", color: "red" };
  }
};

export default function BasicTable() {
  const allData = useContext(LeaderContext);
  const { leaderboard, userPredictions, finalResults } = allData;

  return (
    <div className="TableContainer">
      <div className="Table">
        <h3>Last match</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell align="left">Team 1</TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left">Team 2</TableCell>
                <TableCell align="left">Points</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userPredictions.map((item, index) => {
                const user = item.user;
                const teams1 = matches[finalResults.length - 1].team1;
                const team2 = matches[finalResults.length - 1].team2;
                const score1 = item.scores[finalResults.length - 1].score1;
                const score2 = item.scores[finalResults.length - 1].score2;
                const roundpoints =
                  leaderboard[index].roundpoints[finalResults.length];
                return (
                  <>
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="index">
                        {user}
                      </TableCell>
                      <TableCell component="th" scope="index">
                        {teams1}
                      </TableCell>
                      <TableCell align="left">{score1}</TableCell>
                      <TableCell align="left">{score2}</TableCell>
                      <TableCell align="left">{team2}</TableCell>
                      <TableCell align="left">
                        <span className="status">{roundpoints}</span>
                      </TableCell>
                    </TableRow>
                  </>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="Table">
        <h3>Next match</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 350 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell align="left">Team 1</TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left">Team 2</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userPredictions.map((item, index) => {
                const user = item.user;
                const teams1 = matches[finalResults.length].team1;
                const team2 = matches[finalResults.length].team2;
                const score1 = item.scores[finalResults.length].score1;
                const score2 = item.scores[finalResults.length].score2;
                return (
                  <>
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="index">
                        {user}
                      </TableCell>
                      <TableCell component="th" scope="index">
                        {teams1}
                      </TableCell>
                      <TableCell align="left">{score1}</TableCell>
                      <TableCell align="left">{score2}</TableCell>
                      <TableCell align="left">{team2}</TableCell>
                    </TableRow>
                  </>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
