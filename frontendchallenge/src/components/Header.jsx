import React, { useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

function Header () {
 return (
    <Form>
    <FormGroup switch>
      <Input type="switch" role="switch" />
      <Label check> Dark Mode</Label>
    </FormGroup>
    </Form>
 )
}

export default Header