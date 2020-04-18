import React, { useCallback, useRef, useState, useEffect, useMemo } from 'react'
import { MdImage } from 'react-icons/md'
import { useField } from '@rocketseat/unform'

import { useDispatch, useSelector } from 'react-redux'
import { Container, Content, Image } from './styles'
import TextField from '~/components/TextField'
import colors from '~/styles/colors'
import { URL } from '~/utils/constants'
import {
  createDeliverymanRequest,
  updateDeliverymanRequest,
} from '~/store/modules/deliverymen/actions'
import api from '~/services/api'
import Header from '../Header'
import history from '~/services/history'

const RegisterDeliveryman = () => {
  const { defaultValue, registerField } = useField('avatar')

  const editData = useSelector(
    state =>
      history.location.state?.id &&
      state.deliverymen?.list?.find(i => i.id === history.location.state.id)
  )

  const dispatch = useDispatch()
  const imgRef = useRef(null)
  const [file, setFile] = useState(defaultValue?.id)
  const [preview, setPreview] = useState(
    editData?.avatar?.url || defaultValue?.url
  )
  const [data, setData] = useState({
    name: '',
    email: '',
  })

  useEffect(() => {
    if (editData) {
      console.log(editData)
      const { name, email } = editData
      setData({
        name,
        email,
      })
    }
  }, [editData])

  useEffect(() => {
    if (imgRef.current) {
      registerField({
        name: 'avatar_id',
        ref: imgRef.current,
        path: 'dataset.file',
      })
    }
  }, [registerField])

  const handleSave = useCallback(() => {
    if (editData) {
      dispatch(
        updateDeliverymanRequest({
          id: history.location.state.id,
          data,
        })
      )
    } else {
      dispatch(createDeliverymanRequest(data))
    }
  }, [data, dispatch, editData])

  const handleChangeFields = useCallback(
    event => {
      const { name, value } = event.currentTarget
      setData({
        ...data,
        [name]: value,
      })
    },
    [data]
  )

  const handleChangeFile = useCallback(
    async event => {
      const formData = new FormData()
      const { files } = event.target

      formData.append('file', files[0])

      const response = await api.post('files', formData)
      const { id, url } = response.data

      setData({ ...data, avatarId: id })
      setPreview(url)
    },
    [data]
  )

  const handleAddFile = useCallback(() => {
    imgRef.current.click()
  }, [])

  const renderDefault = useMemo(
    () => (
      <Image onClick={handleAddFile}>
        <MdImage size={40} color={colors.alto} />
        <p>
          <strong>Adicionar foto</strong>
        </p>
      </Image>
    ),
    [handleAddFile]
  )

  return (
    <Container>
      <Header
        title={editData ? 'Edição de entregador' : 'Cadastro de entregadores'}
        handleSave={handleSave}
        backLink={URL.DELIVERYMEN}
      />

      <Content>
        <Image htmlFor="avatar">
          {preview ? <img src={preview} alt="" /> : renderDefault}

          <input
            id="avatar"
            type="file"
            accept="image/*"
            data-file={file}
            ref={imgRef}
            onChange={handleChangeFile}
          />
        </Image>
        <p>Nome</p>
        <TextField
          name="name"
          type="name"
          placeholder="Nome"
          onChange={handleChangeFields}
          value={data.name}
        />
        <p>Email</p>
        <TextField
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChangeFields}
          value={data.email}
        />
      </Content>
    </Container>
  )
}

RegisterDeliveryman.propTypes = {}

RegisterDeliveryman.defaultProps = {}

export default RegisterDeliveryman
