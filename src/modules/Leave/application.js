import Table from 'react-bootstrap/Table';

function Application() {
  return (
    <Table striped bordered hover size="sm" className='col-md-7 mt-5'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Leave Type</th>
          <th>Date</th>
          <th>Duration</th>
          <th>Approved/Rejected</th>
        </tr>
      </thead>

      <tbody>
        <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>Annual Leave</td>
            <td>3/1/2023</td>
            <td>2</td>
            <td>Approved</td>
        </tr>
        <tr>
            <td>2</td>
            <td>John Doe</td>
            <td>Marriage Leave</td>
            <td>6/1/2023</td>
            <td>2</td>
            <td>Approved</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Jane Doe</td>
            <td>Annual Leave</td>
            <td>17/1/2023</td>
            <td>1</td>
            <td>Approved</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Jack Doe</td>
            <td>Annual Leave</td>
            <td>18/1/2023</td>
            <td>1</td>
            <td>Rejected</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Jane Doe</td>
            <td>Medical Leave</td>
            <td>24/1/2023</td>
            <td>1</td>
            <td>Approved</td>
        </tr>
        <tr>
            <td>6</td>
            <td>Jane Doe</td>
            <td>Annual Leave</td>
            <td>29/1/2023</td>
            <td>1</td>
            <td>Rejected</td>
        </tr>
        <tr>
            <td>7</td>
            <td>Jack Doe</td>
            <td>Annual Leave</td>
            <td>2/2/2023</td>
            <td>1</td>
            <td>Approved</td>
        </tr>
        <tr>
            <td>8</td>
            <td>John Doe</td>
            <td>Medical Leave</td>
            <td>10/2/2023</td>
            <td>1</td>
            <td>Approved</td>
        </tr>
        {
          localStorage.getItem('reasons') != null ?
          <tr>
            <td>9</td>
            <td>{localStorage.getItem('name')}</td>
            <td>Annual Leave</td>
            <td>{localStorage.getItem('start')}</td>
            <td>{localStorage.getItem('duration')}</td>
            <td>Pending</td>
        </tr>
        : 
        <></>
        }
      </tbody>
    </Table>
  );
}

export default Application;