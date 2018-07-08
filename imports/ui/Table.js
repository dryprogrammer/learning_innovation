import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
// import { HeatMap } from './Heatmap';
// import { HeatMap2 } from './HeatMap2';

const search_values = [
  'transformation',
  'visualisation',
  'transformation',
  'RCT',
  'Cost benefit analysis',
  'narrative',
  'messaging',
];

const activities_values = [
  'speech writing',
  'event planning',
  'public notice',
  'event planning',
  'presentation',
  'presentation',
  'event planning',
];
const applications_values = [
  'excel',
  'word',
  'outlook',
  'excel',
  'outlook',
  'excel',
  'excel',
];
const questions_values = [
  'policy',
  'SME',
  'policy',
  'SME',
  'SME',
  'SME',
  'training metarial',
];
const titles_values = [
  'senior officer',
  'assistant',
  'senior officer',
  'director',
  'senior officer',
  'senior officer',
  'director',
];

const skills_values = [
  'writing',
  'data analysis',
  'policy making',
  'data analysis',
  'government services',
  'data analysis',
  'infographic',
];

const cols = [
  'top search',
  'top activities',
  'top applications',
  'top questions',
  'top skills requested',
  'titles',
];

const data = [
  {
    col: cols[0],
    a: search_values[0],
    b: search_values[1],
    c: search_values[2],
    d: search_values[3],
    e: search_values[4],
    f: search_values[5],
    g: search_values[6],
  },
  {
    col: cols[1],
    a: activities_values[0],
    b: activities_values[1],
    c: activities_values[2],
    d: activities_values[3],
    e: activities_values[4],
    f: activities_values[5],
    g: activities_values[6],
  },
  {
    col: cols[2],
    a: applications_values[0],
    b: applications_values[1],
    c: applications_values[2],
    d: applications_values[3],
    e: applications_values[4],
    f: applications_values[5],
    g: applications_values[6],
  },
  {
    col: cols[3],
    a: questions_values[0],
    b: questions_values[1],
    c: questions_values[2],
    d: questions_values[3],
    e: questions_values[4],
    f: questions_values[5],
    g: questions_values[6],
  },
  {
    col: cols[4],
    a: skills_values[0],
    b: skills_values[1],
    c: skills_values[2],
    d: skills_values[3],
    e: skills_values[4],
    f: skills_values[5],
    g: skills_values[6],
  },
  {
    col: cols[5],
    a: titles_values[0],
    b: titles_values[1],
    c: titles_values[2],
    d: titles_values[3],
    e: titles_values[4],
    f: titles_values[5],
    g: titles_values[6],
  },
];

class Table extends React.Component {
  constructor() {
    super();
  }
  render() {
    const backgroundImage = '/images/masthead-bg--yellow.png';
    return (
      <div style={{ background: 'bbb' }} >
        <div style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto',
          height: 500,
          padding: '50px 100px',
          // width: '100%',
          // height: '100vh',
        }}>
          <h5 >Home   >   Learning at CSC   >   Programmes</h5>
          <h1 >Course design</h1>
          <h3 >Data inisights from public officers</h3>
          <div style={{ background: 'white', width: 1100, marginTop: 50 }}>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "",
              columns: [
                {
                  Header: "Data tracked",
                  accessor: "col"
                }
              ]
            },
            {
              Header: "Agencies",
              columns: [
                {
                  Header: <div style={{ height: 100, "display":"flex","flexDirection":"column","justifyContent":"center" }} ><img width='80px' src='/images/min_def.jpeg' /></div>,
                  accessor: "a"
                },
                {
                  Header: <div style={{ height: 100, "display":"flex","flexDirection":"column","justifyContent":"center" }} ><img width='80px' src='/images/min_culture.jpeg' /></div>,
                  accessor: "b"
                },
                 {
                  Header: <div style={{ height: 100, "display":"flex","flexDirection":"column","justifyContent":"center" }} ><img width='80px' src='/images/min_finance.jpeg' /></div>,
                  accessor: "c"
                },
                 {
                  Header: <div style={{ height: 100, "display":"flex","flexDirection":"column","justifyContent":"center" }} ><img width='80px' src='/images/min_health.png' /></div>,
                  accessor: "d"
                },
                 {
                  Header: <div style={{ height: 100, "display":"flex","flexDirection":"column","justifyContent":"center" }} ><img width='80px' src='/images/min_comm.png' /></div>,
                  accessor: "e"
                },
                  {
                  Header: <div style={{ height: 100, "display":"flex","flexDirection":"column","justifyContent":"center" }} ><img width='80px' src='/images/min_foreign.png' /></div>,
                  accessor: "f"
                },
                {
                  Header: <div style={{ height: 100, "display":"flex","flexDirection":"column","justifyContent":"center" }} ><img width='80px' src='/images/min_edu.jpeg' /></div>,
                  accessor: "g",
                }
              ]
            },
            
            {
              Header: 'Stats',
              columns: [
                {
                  Header: "Visits",
                  accessor: "visits"
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />

          <div style={{ padding: 30 }} >
            <iframe src='https://dashboard-sloqtcbsga.now.sh/dashboard'  width="1000px" height="500px" frameBorder="0"/>
          </div>
          </div>
        </div>
      </div>
    );
  }
};

export { Table };