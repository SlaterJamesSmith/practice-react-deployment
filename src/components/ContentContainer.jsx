import React from 'react';
import Dispatcher from './Dispatcher';
import JobBuilder from './JobBuilder';
import { Switch, Route, withRouter } from 'react-router-dom';
import Profiles from './Profiles';
import Error404 from './Error404';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ContentContainer extends React.Component{


  render(){
    return (
      <div>
        <style jsx>{`
          div {
            width: 1440px;
            margin-left: auto;
            margin-right: auto;
          }

          @media only screen and (max-width: 1500px)  {
            div {
              width: 95vw;
            }
            img {
              margin-top: -20vw;
            }
          }
          @media only screen and (max-width: 1000px)  {
            img {
              opacity: 0;
            }
          }
         `}</style>
        <Switch>
          <Route exact path='/' render={()=><Dispatcher jobDispList={this.props.masterJobList} memberList={this.props.masterMemberList} />} />
          <Route exact path='/job-builder' render={()=><JobBuilder jobList={this.props.masterJobList} jobMemberList={this.props.masterMemberList} />} />
          <Route path='/admin' render={()=><Profiles removeMemberList={this.props.masterMemberList} onRemoveMember={this.handleRemoveMemberFromList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}


ContentContainer.propTypes = {
  masterMemberList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterMemberList: state.masterMemberList,
    masterJobList: state.masterJobList
  }
};

export default withRouter(connect(mapStateToProps)(ContentContainer));
