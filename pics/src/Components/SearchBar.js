import React from 'react';


class SearchBar extends React.Component{
    render(){

        return (
        <div className="ui segment">
            <fom className="ui form">
                <div className="field">
                <label>Image Search</label>
                <input type="text" />
                </div>
            </fom>
        </div>
        );
    }
}

export default SearchBar 