import React from 'react'
import { shallow, mount } from 'enzyme'
import EmployeeList from '../EmployeeList'
import axios from 'axios'

describe('<EmployeeList />', () => {
  it('Shuold fetch employees from API using Axios', () => {
    const axiosSpy = jest.spyOn(axios, 'get')
    shallow(<EmployeeList/>)
    expect(axiosSpy).toBeCalled()
  })

  it('should render a list of 5 employees', async () => {
    const expectedData = {
      data: [
      {
        "id":1,
        "email":"george.bluth@reqres.in",
        "first_name":"George",
        "last_name":"Bluth",
        "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
      },
        {
          "id":2,
          "email":"janet.weaver@reqres.in",
          "first_name":"Janet","last_name":"Weaver","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"},{"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"},{"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"},{"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"}]
    }
    const describedComponent = mount(<EmployeeList/>)
    await describedComponent.setState({ employees: expectedData.data })

    expect(describedComponent.find('li')).toHaveLength(5)

  })
})