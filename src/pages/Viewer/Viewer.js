import React, { Component } from "react";
import launchViewer from "./ViewerFunction";

class Viewer extends Component {
  componentDidMount() {
    var documentId =
      "urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YWRhZC1kZGFkLWRhZGEvQWx1cHJvZl9NQi1TUjUwTi1JV19FX0FsdV9FTkdfUi0wMDAwN19QMDEucnZ0";
    launchViewer("viewerDiv", documentId);
  }

  render() {
    return (
      <div
        style={{ position: "absolute", width: "100%", height: "100vh" }}
        id="viewerDiv"
      />
    );
  }
}

export default Viewer;
