import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Container, Form, FormGroup, Input, Label} from 'reactstrap';
import AppNavbar from './AppNavbar';

class CheeseEdit extends Component {

    emptyItem = {
        name: '',
        color: '',
        price: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem,
            selectedFiles: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const cheese = await (await fetch(`/cheeseria/${this.props.match.params.id}`)).json();
            this.setState({item: cheese});
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item, selectedFiles: event.target.files});
    }

    async handleSubmit(event) {
        event.preventDefault();
        let formData = new FormData();
        const {item} = this.state;
        const {selectedFiles} = this.state;
        formData.append('cheese', JSON.stringify(item));
        if (selectedFiles && selectedFiles.length > 0) {
            formData.append('file', selectedFiles[0]);
        }

        await fetch('/cheeseria' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            body: formData,
        });
        this.props.history.push('/cheeseria');
    }

    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Edit Cheese' : 'Add Cheese'}</h2>;

        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={item.name || ''}
                               onChange={this.handleChange} autoComplete="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="color">Color</Label>
                        <Input type="text" name="color" id="color" value={item.color || ''}
                               onChange={this.handleChange} autoComplete="color"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="price">Price</Label>
                        <Input type="text" name="price" id="price" value={item.price || ''}
                               onChange={this.handleChange} autoComplete="price"/>
                    </FormGroup>
                    <br/>
                    <Label for="image">Image</Label>&nbsp;
                    <input type="file" name="file" id="file" onChange={this.handleChange}/>
                    <br/>
                    <br/>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/cheeseria">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default CheeseEdit;