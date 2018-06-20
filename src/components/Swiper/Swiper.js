import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Swiper extends Component{

    render() {
        const category = this.props.matchParams.category

        let type = this.props.matchParams.type

        if(this.props.matchParams.type === 'freelancer'){
            type = 'employer'
        } else if (this.props.matchParams.type === 'employer'){
            type = 'freelancer'
        }

        console.log(this.type)

        return (
            <div className="user">


                <div>

                    {console.log('THIS',this)}
                    {console.log('Type', type)}

                    {
                        this.props.user.posts[category][type]
                        // .filter((x) => x.posterId !== this.props.user.logUser)
                        .map((x) => {
                            return <h1 key={x.posterId}>{x.postBody.description}</h1>
                        })
                    }

                </div>
            </div>
        )
    }
}

export default Swiper;
