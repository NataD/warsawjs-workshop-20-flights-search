import React from 'react';

class SearchView extends React.Component{
    state = {
        fromValue: "WAW",
        toValue: "",
        departValue: "",
        returnValue: ""
    };

    onFromChange = (event) => {
        console.log(event.target.value);
        this.setState({
            fromValue: event.target.value
        });
    };

    onToChange = (event) => {
      this.setState({
          toValue: event.target.value
      })
    };

    onDepartChange = (event) => {
        this.setState({
            departValue: event.target.value
        });
    };

    onReturnChange = (event) => {
        console.log(event.target.value);
        this.setState({
            returnValue: event.target.value
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);

        if(this.state.toValue === ""){
            return;
        }

        if(this.state.fromValue === ""){
            return;
        }

        if(this.state.departValue === ""){
            return;
        }

        if(this.state.returnValue === ""){
            return;
        }


        // if(this.state.toValue === "" && this.state.fromValue === "" && this.state.departValue === "" && this.state.returnValue === ""){
        //     return;
        // }



        this.props.onAppSubmit({...this.state});

        //Another way to write the code above
        // this.props.onAppSubmit({
        //     fromValue: this.state.fromValue,
        //     toValue: this.state.toValue,
        //     departValue: this.state.departValue,
        //     returnValue: this.state.returnValue
        // });
    };

    render(){
        console.log(this.props);
        return (<form onSubmit={this.onSubmit}>
            <label>
                <strong>From</strong>
            </label>
            <select value={this.state.fromValue} onChange={this.onFromChange}>
                <option value="ATL">ATL</option>
                <option value="WAW">WAW</option>
            </select>

            <label>
                <strong>To</strong>
            </label>
            <select value={this.state.toValue} onChange={this.onToChange}>
                <option value="ATL">ATL</option>
                <option value="WAW">WAW</option>
            </select>

            <label>
                <strong>Depart</strong>
            </label>
            <input type="date" value={this.state.departValue} onChange={this.onDepartChange} />

            <label>
                <strong>Return</strong>
            </label>
            <input type="date" value={this.state.returnValue} onChange={this.onReturnChange} />
            <input type="submit" value="Submit" />
        </form>)
    }
}

export default SearchView;