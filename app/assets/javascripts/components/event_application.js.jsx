var EventApplication = React.createClass ({
  getInitialState: function(){
    return { events: [] };
  },
  componentDidMount: function(){
    this.getDataFromApi();
  },
  getDataFromApi: function(){
    var self = this;
    $.ajax({
      url: '/api/events',
      success: function(data){
        self.setState({ events: data });
      },
      error: function(xhr, status, error){
        alert('Cannot get data from API: ', error);
      }
    });
  },
  handleDeleteRecord:function(event){
    var events = this.state.events.slice();
    var index = events.indexOf(event);
    events.splice(index, 1);
    this.setState({ events: events });
  },
  handleSearch: function(events){
    this.setState({ events: events });
  },
  handleAdd: function(event){
    var events = this.state.events;
    events.push(event);
    this.setState({ events: events });
  },

  render: function () {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>Calender App</h1>
          <h2>By Abdel-Raouf</h2>
        </div>
        <div className="row">
          <div className="col-md-3">
            <SearchForm handleSearch={this.handleSearch} />
          </div>
          <div className="col-md-9">
            <NewForm handleAdd={this.handleAdd} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <EventTable events={this.state.events}
                        handleDeleteRecord={this.handleDeleteRecord}/>
          </div>
        </div>
      </div>
    )
  }
});
