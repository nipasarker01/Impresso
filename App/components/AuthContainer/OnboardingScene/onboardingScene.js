import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,



} from 'react-native';
import Infoslider from 'react-native-infoslider';

export default class OnboardingScene extends React.Component {



  constructor(props) {
    super(props);

    this.state = {
      data:[
           {
            title:"Explore Innovation",
            text:"Discover interesting ideas and concepts.Keep up with the latest innovations!",
            image: require('./../../../../Images/onboarding1question.png')},

            {
              title:"Inovate",
              text:"Share your latestideas and team with others to bring them to life!",
              image: require('./../../../../Images/onboarding1question.png')},

         {
          title:"Collaborate",
          text:"Join teams to participate with your skills and develop today's innovations.",
          image: require('./../../../../Images/onboarding1question.png')},

         {
          title:"Coach",
          text:"Join ideas to guide and advice teams on the development project.",
          image: require('./../../../../Images/onboarding1question.png')},

          {
          title:"Reach The Market",
          text:"Submit your completed project to get them promoted and find potential clients.",
          image: require('./../../../../Images/symbolond4.png')

      },
    ]
    };
  }
  render() {
    return (
     <Infoslider
        data={this.state.data}
        showDots={true}
        activeDotColor="#04B4AE"
        titleColor="#fff"
        textColor="#fff"

        loop={false}
        autoplay={true}
        autoplayTimeout={3}
       />
    );
  }
}
