import React, { useState } from 'react';
import MaskedInput from 'antd-mask-input';
import FloatLabel from "../float-label/float-label";
import { Form, Input, Button, Row, Col, DatePicker, Select } from 'antd';
import 'antd/dist/antd.less';
import './test-form.less';

const { Option } = Select;

const validateMessages = {
  required: 'Поле является обязательным',
  types: {
    email: 'Неверный формат Email',
  },
};


const TestForm = props => {
  const [family, setFamily] = useState();
  const [name, setName] = useState();
  const [middlename, setMiddlename] = useState();
  const [gender, setGender] = useState('Мужской');
  const [birthDate, setBirthDate] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [work, setWork] = useState();

  const onFinish = (values) => {
    console.table(values);
    alert(`Форма валидна, отправляется запрос\n${JSON.stringify(values, null, 2)}`);
  };

  return (
    <>
      <h1>Информация о сотруднике</h1>
      <Form
        name='test-messages'
        onFinish={onFinish}
        validateMessages={validateMessages}
        initialValues={{
          gender: 'Мужской'
        }}>


        <FloatLabel label='Фамилия' value={family}>
          <Form.Item
            name='family'
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input value={family} onChange={e => setFamily(e.target.value)} />
          </Form.Item>
        </FloatLabel>



        <FloatLabel label='Имя' value={name}>
          <Form.Item
            name='name'
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input value={name} onChange={e => setName(e.target.value)} />
          </Form.Item>
        </FloatLabel>


        <FloatLabel label='Отчество' value={middlename}>
          <Form.Item
            name='middlename'
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input value={middlename} onChange={e => setMiddlename(e.target.value)} />
          </Form.Item>
        </FloatLabel>


        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col xs={24} sm={12}>
            <FloatLabel label='Пол' value={gender}>
              <Form.Item name='gender'>
                <Select onChange={value => setGender(value)} value={gender}>
                  <Option className="green-option" value="male">Мужской</Option>
                  <Option className="green-option" value="female">Женский</Option>
                </Select>
              </Form.Item>
            </FloatLabel>
          </Col>

          <Col xs={24} sm={12}>
            <FloatLabel label='Дата рождения' value={birthDate}>
              <Form.Item name='birthDate'>
                <DatePicker value={birthDate} placeholder="" onChange={e => setBirthDate(e)} />
              </Form.Item>
            </FloatLabel>
          </Col>
        </Row>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col xs={24} sm={12}>
            <FloatLabel label='Мобильный телефон' value={phone}>
              <Form.Item
                name='phone'
                rules={[{
                  required: true,
                },
                {
                  pattern: /\+7\(\d\d\d\) \d\d\d-\d\d-\d\d/,
                  message: 'Введите корректный номер телефона',
                }]}
              >
                <MaskedInput mask="+7(111) 111-11-11" placeholder="" value={phone} onChange={e => setPhone(e.target.value)} />
              </Form.Item>
            </FloatLabel>
          </Col>

          <Col xs={24} sm={12}>
            <FloatLabel label='Email' value={email}>
              <Form.Item
                name='email'
                rules={[
                  {
                    type: 'email',
                    required: true,
                  },
                ]}
              >
                <Input value={email} onChange={e => setEmail(e.target.value)} />
              </Form.Item>
            </FloatLabel>
          </Col>
        </Row>

        <FloatLabel label='Адрес постоянной регистрации' value={address}>
          <Form.Item name='address'>
            <Input value={address} onChange={e => setAddress(e.target.value)} />
          </Form.Item>
        </FloatLabel>

        <FloatLabel label='Название работодателя' value={work}>
          <Form.Item name='work'>
            <Input value={work} onChange={e => setWork(e.target.value)} />
          </Form.Item>
        </FloatLabel>


        <Form.Item>
          <Button type="primary" htmlType="submit">СОХРАНИТЬ</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default TestForm;