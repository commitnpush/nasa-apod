import React, { Component } from 'react';
import ViewerTemplate from 'components/ViewerTemplate';
import SpaceNavigator from 'components/SpaceNavigator';
import Viewer from 'components/Viewer';
import moment from 'moment';
import * as api from './lib/api';

class App extends Component {
  state = {
    loading: false,
    maxDate: null,
    date: null,
    url: null,
    mediaType: null
  }

  getAPOD = (date)=>{
    if(this.state.loading) return;

    this.setState({
      loading: true
    });
    
    api.getAPOD(date).then((response) => {
      const { date, url, media_type: mediaType} = response.data;
      if(!this.state.maxDate){
        this.setState({
          maxDate: date
        });
      }
      this.setState({
        date: date,
        mediaType,
        url,
        loading:false
      });
    }).catch(e => {
      console.error(e);
    });
  }

  handlePrev = () => {
    console.log('prev');
    const { date } = this.state;
    const prevDate = moment(date).subtract(1, 'days').format('YYYY-MM-DD');
    console.log(prevDate);
    this.getAPOD(prevDate);

  }

  handleNext = () => {
    const {date, maxDate} = this.state;
    if(date === maxDate) return;
    const nextDate = moment(date).add(1, 'days').format('YYYY-MM-DD');
    this.getAPOD(nextDate);
  }

  componentDidMount(){
    this.getAPOD();
  }
  render() {
    const {url, mediaType, loading} = this.state;
    const {handleNext, handlePrev} = this;
    return (
      <div>
        <ViewerTemplate spaceNavigator={<SpaceNavigator onPrev={handlePrev} onNext={handleNext}/>} viewer={(<Viewer url={url} mediaType={mediaType} loading={loading}/>)}/>
      </div>
    )
  }
}

export default App;