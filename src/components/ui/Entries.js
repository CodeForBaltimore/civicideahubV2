import React from 'react';
import IdeaCard from './IdeaCard';
import {Grid, Row, Col} from 'react-bootstrap';
import IdeaForm from './IdeaForm';

class Entries extends React.Component {
    constructor(props) {
        super(props);
    }

    sortEntriesByDate() {
        let preservedDates = this.props.entries;

        let date_sorted_entries = this.props.entries.sort((a,b) => {
            return new Date(a.createdAt)
        }).reverse();

        return date_sorted_entries;
    }

    convertDateFormat(items) {
        let convertedDateFormat = items.map((itemValue, index) => {
            let dateObject = new Date(itemValue.createdAt);
            let day = dateObject.getDate();
            let month = dateObject.getMonth() + 1; //Iterates starting at 0 so Jan is 0 instead of 1
            let year = dateObject.getFullYear();

            itemValue.createdAt = month + '/' + day + '/' + year;
            return itemValue;
        });

        return convertedDateFormat;
    }

    render() {
      let itemsSortedByDate = this.sortEntriesByDate();
      let itemsWithDateConverted = this.convertDateFormat(itemsSortedByDate);
      let childElements = itemsWithDateConverted.map((listValue, index) => {
        return (
          <Col xs={12} sm={6} md={6} lg={4} key={listValue._id}>
            <IdeaCard
            ideaTitle={listValue.title}
            userName={listValue.userName}
            ideaDescription={listValue.problem}
            ideaSolution={listValue.potential_solution}
            likeCount={listValue.likeCount}
            coderCount={listValue.coderCount}
            image={listValue.image}
            createdAt={listValue.createdAt}
            />
          </Col>
        );
      });

      return (
        <div style={{marginBottom:"100px"}}>
          {childElements}
        </div>
      );
    }

}

export default Entries;
