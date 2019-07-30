import React, { Component } from 'react';

class ReviewForm extends Component {
    state = {
        isOpen: false,
        author: 'Nag@mail.com',
        stars: 5,
        body: ''
    }
    toggleForm() {
        let { isOpen } = this.state;
        this.setState({ isOpen: !isOpen })
    }
    handleForm(e) {
        e.preventDefault();
        let data = {
            author: this.refs.author.value,
            stars: this.refs.stars.value,
            body: this.refs.body.value
        }
        let { onSubmit } = this.props;
        if (onSubmit) {
            onSubmit({ v: data })
            this.toggleForm();
        }
    }
    handleChange(e) {
        let field = e.target.id;
        let fieldValue = e.target.value;
        this.setState({[field]:fieldValue})
    }
    renderForm() {
        let { isOpen,author,stars,body } = this.state;
        if (!isOpen) return (
            <button onClick={e => this.toggleForm()} className="btn btn-sm btn-dark"><i className="fa fa-plus"></i></button>
        )
        else return (
            <div className="card">
                <div className="card-header">ReviewForm</div>
                <div className="card-body">
                    <form onSubmit={e => this.handleForm(e)}>
                        <div className="form-group">
                            <label>author</label>
                            <input className="form-control" id="author" value={author} onChange={e => this.handleChange(e)} />
                        </div>
                        <div className="form-group">
                            <label>stars</label>
                            <select className="form-control" id="stars" value={stars} onChange={e => this.handleChange(e)}>
                                {[1, 2, 3, 4, 5].map(n => <option key={n}>{n}</option>)}
                            </select>
                            <span className="text-danger">{stars<3?'expected atleast 3 stars':''}</span>
                        </div>
                        <div className="form-group">
                            <label>body</label>
                            <textarea className="form-control" id="body" value={body} onChange={e => this.handleChange(e)}></textarea>
                        </div>
                        <button className="btn btn-sm btn-dark">submit</button>
                        &nbsp;
                        <button onClick={e => this.toggleForm()} type="button" className="btn btn-sm btn-danger">cancel</button>
                    </form>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-6 col-md-8">
                        {this.renderForm()}
                    </div>
                </div>
            </div>
        );
    }
}

export default ReviewForm;