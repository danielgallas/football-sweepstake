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
import matches from "../../data/matches_total";

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
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Final result:</TableCell>
                <TableCell align="left">
                  {console.log(finalResults.length)}
                  {matches[finalResults.length - 1].team1}
                </TableCell>
                <TableCell align="left">
                  {finalResults[finalResults.length - 1].finalScore1}
                </TableCell>
                <TableCell align="left">
                  {finalResults[finalResults.length - 1].finalScore2}
                </TableCell>
                <TableCell align="left">
                  {" "}
                  {matches[finalResults.length - 1].team2}
                </TableCell>
                <TableCell align="left">Points</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userPredictions.map((item, index) => {
                const user = item.user;
                const teams1 = matches[finalResults.length - 1].team1;
                const team2 = matches[finalResults.length - 1].team2;
                // const score1 = item.scores[finalResults.length - 1].score1;
                // const score2 = item.scores[finalResults.length - 1].score2;

                const roundpoints =
                  leaderboard[index].roundpoints[finalResults.length];
                return (
                  <React.Fragment key={index}>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="index">
                        {user}
                      </TableCell>
                      <TableCell component="th" scope="index">
                        {teams1}
                      </TableCell>
                      <TableCell align="left">
                        {" "}
                        {item.scores[finalResults.length - 1]
                          ? item.scores[finalResults.length - 1].score1
                          : "null"}
                      </TableCell>
                      <TableCell align="left">
                        {" "}
                        {item.scores[finalResults.length - 1]
                          ? item.scores[finalResults.length - 1].score2
                          : "null"}
                      </TableCell>
                      <TableCell align="left">{team2}</TableCell>
                      <TableCell align="left">
                        <span className="status">{roundpoints}</span>
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
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
          <Table sx={{ minWidth: 350 }} size="small" aria-label="simple table">
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
                const team1 = matches[finalResults.length].team1;
                const team2 = matches[finalResults.length].team2;
                // const score1 = item.scores[finalResults.length].score1;
                // const score2 = item.scores[finalResults.length].score2;
                // const team1 = "daniel";
                // const team2 = "daniel";
                // const score1 = 0;
                // const score2 = 2;
                // console.log(finalResults.length);
                // console.log(item.scores);
                return (
                  <React.Fragment key={index}>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="index">
                        {user}
                      </TableCell>
                      <TableCell component="th" scope="index">
                        {team1}
                      </TableCell>
                      <TableCell align="left">
                        {item.scores[finalResults.length]
                          ? item.scores[finalResults.length].score1
                          : "null"}
                      </TableCell>
                      <TableCell align="left">
                        {item.scores[finalResults.length]
                          ? item.scores[finalResults.length].score2
                          : "null"}
                      </TableCell>
                      <TableCell align="left">{team2}</TableCell>
                    </TableRow>
                  </React.Fragment>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
