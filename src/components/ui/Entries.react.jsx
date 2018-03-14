import React from 'react';
import IdeaCard from './IdeaCard.react';
import {Grid, Row, Col} from 'react-bootstrap';
import IdeaForm from './IdeaForm.react';

class Entries extends React.Component {
    constructor(props) {
        super(props);
    }

    sortEntriesByDate() {
        let date_sorted_entries = this.props.entries.sort((a,b) => {
            return new Date(a.createdAt).getTime() -
                new Date(b.createdAt).getTime()
        }).reverse();

        return date_sorted_entries;
    }

    convertDateFormat(items) {
        let convertedDateFormat = items.map((itemValue, index) => {
            let dateObject = new Date(itemValue.createdAt);
            let day = dateObject.getDate();
            let month = dateObject.getMonth();
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
                          ideaTitle={listValue.ideaTitle}
                          userName={listValue.userName}
                          ideaDescription={listValue.ideaDescription}
                          ideaSolution={listValue.ideaSolution}
                          likeCount={listValue.likeCount}
                          coderCount={listValue.coderCount}
                          image={listValue.image}
                          createdAt={listValue.createdAt}
                    />
                  </Col>

            );
        });

        1
potential_solution
:"Porchetta brisket capicola ham turkey short loin pork belly. Prosciutto turducken shoulder meatloaf, beef rump tri-tip spare ribs ham hock picanha fatback t-bone pork belly biltong bresaola. Cupim bacon capicola pancetta shank. Pancetta bacon boudin picanha pork chop frankfurter turkey."
problem
:"Andouille short loin tail pork chop tenderloin salami t-bone ground round. Bacon porchetta bresaola ball tip. Strip steak kevin short ribs venison pork loin, salami ground round pork chop drumstick doner swine pastrami. Doner beef ribs chicken cupim filet mignon pork loin tri-tip tenderloin ham hock ground round sausage t-bone. Boudin shank shoulder meatloaf hamburger chicken swine. Turkey brisket shankle tail drumstick."
title
:"Bacon ipsum dolor"
user
:"Piggy"

        return (

            <div style={{marginBottom:"100px"}}>
                    {childElements}
            </div>
        );


    }

}

export default Entries;
