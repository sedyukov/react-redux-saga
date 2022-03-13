import React from 'react';
import {connect} from "react-redux";
import {createPost} from "../redux/actions";

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }

    }
    submitHandler = event => {
        event.preventDefault();
        const {title} = this.state
        if(!title.trim()) {
            return
        }
        const newPost = {
            title, id: Date.now().toString()
        }
        console.log(newPost)
        this.props.createPost(newPost)
        this.setState({title:""})
    }
    changeInputHandler = event => {
        this.setState(prevState => ({...prevState, ...{
            [event.target.name]: event.target.value
        }}))
    }
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label fs-5">Заголовок поста:</label>
                    <input type="text" className="form-control" id="title"
                           value={this.state.title}
                           name="title"
                           onChange={this.changeInputHandler}
                    />
                    <button className="btn btn-success mt-3">Создать</button>
                </div>
            </form>
        )
    }
}
const mapDispatchToProps = {
    createPost
}
export default connect(null, mapDispatchToProps)(PostForm)