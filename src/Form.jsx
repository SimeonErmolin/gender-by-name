import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import Deduction from './Deduction';
import Warning from './Warning';
import requestGenderByName from './network';

export default function Form() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');

  function handleNameChange(value) {
    setName(value)
  }

  async function findInfoUser(e) {
    e.preventDefault();

    if (name == "") return;

    const information = await requestGenderByName(name);

    setGender(`${information.name} is ${information.gender}`)
    setName('')
  }

  return (
    <form className="form" onSubmit={findInfoUser}>
      <Input value={name} onNameChange={handleNameChange} />
      <Button />
      <Deduction infoUser={gender} />
      <Warning warn={name} />
    </form>
  )
}
