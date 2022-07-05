import React, {Component} from 'react';
import {Button, ButtonGroup, Container, Table} from 'reactstrap';
import AppNavbar from './AppNavbar';
import EstimatedCosts from './components/EstimatedCosts'
import {Link} from 'react-router-dom';

class CheeseList extends Component {

    constructor(props) {
        super(props);
        this.state = {cheeseria: [], totalEstimatedCost: 0};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/cheeseria')
            .then(response => response.json())
            .then(data => this.setState({cheeseria: data}))
    }

    async remove(id) {
        await fetch(`/cheeseria/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedCheeseria = [...this.state.cheeseria].filter(i => i.id !== id);
            this.setState({cheeseria: updatedCheeseria});
        });
    }

    handleReqWeightChange = (event, id) => {
        let totalEstimatedCost = 0;
        for (const cheese of this.state.cheeseria) {
            if (cheese.id === id) {
                cheese.estCost = event.target.value * cheese.price
            }
            if (cheese.estCost != null) {
                totalEstimatedCost = totalEstimatedCost + cheese.estCost
            }
        }
        this.setState({totalEstimatedCost: totalEstimatedCost}, () => {
            console.log(this.state.totalEstimatedCost);
        });
    }

    render() {
        const {isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const cheeseList = this.state.cheeseria.map(cheese => {
            return <tr key={cheese.id}>
                <td><img src={`data:image/jpeg;base64,${cheese.image}`} alt={cheese.name}/></td>
                <td style={{whiteSpace: 'nowrap'}}>{cheese.name}</td>
                <td>{cheese.color}</td>
                <td>{cheese.price}</td>
                <td><input type={"text"} id={"reqWeight-" + cheese.id}
                           onChange={event => this.handleReqWeightChange(event, cheese.id)}/>
                </td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/cheeseria/" + cheese.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(cheese.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <br/>
                    <h2>Cheeseria</h2>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="20%">Image</th>
                            <th width="20%">Name</th>
                            <th width="10%">Color</th>
                            <th width="10%">Price/kg</th>
                            <th width="10%">Req. Weight</th>
                            <th width="10%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cheeseList}
                        </tbody>
                    </Table>
                    <EstimatedCosts value={this.state.totalEstimatedCost}/>
                </Container>
            </div>
        );
    }
}

export default CheeseList;