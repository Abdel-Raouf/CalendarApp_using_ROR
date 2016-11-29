var EventApplication = React.createClass ({
  render: function () {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>Calender App</h1>
          <h2>By Abdel-Raouf</h2>
        </div>
        <div className="row">
          <div className="col-md-12">
            <EventTable />
          </div>
        </div>
      </div>
    )
  }
});
