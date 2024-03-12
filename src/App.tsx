import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import './styles/global.css'

const createUserFormSchema = z.object({
  name: z
    .string()
    .min(5, 'Nome precisa ter no mínimo 5 caracteres')
    .transform((name) =>
      name
        .trim()
        .split(' ')
        .map((word) => word[0].toUpperCase().concat(word.substring(1))).join(' ')
    ),
  email: z
    .string()
    .min(1, 'E-mail é requerido')
    .email('Formato de e-mail inválido')
    .toLowerCase(),
  password: z.string().min(6, 'A senha precisa de no mínimo 6 caracteres')
})

type CreateUserFormSchema = z.infer<typeof createUserFormSchema>

function App() {
  const [output, setOutPut] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CreateUserFormSchema>({
    resolver: zodResolver(createUserFormSchema)
  })

  const createUser = (data: any) => {
    console.log(data)
    setOutPut(JSON.stringify(data, null, 4))
  }

  return (
    <main className='h-screen bg-zinc-50 flex flex-col gap-10 items-center justify-center'>
      <form
        className='flex flex-col gap-4 w-full max-w-xs'
        onSubmit={handleSubmit(createUser)}
      >
        <div className='flex flex-col gap-1'>
          <label htmlFor='name'>Nome</label>
          <input
            className='border border-zinc-200 shadow-sm rounded h10 px-3'
            type='text'
            id='name'
            {...register('name')}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='email'>E-mail</label>
          <input
            className='border border-zinc-200 shadow-sm rounded h10 px-3'
            type='email'
            id='email'
            {...register('email')}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='password'>Senha</label>
          <input
            className='border border-zinc-200 shadow-sm rounded h10 px-3'
            type='password'
            id='password'
            {...register('password')}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <button
          className='bg-emerald-500 rounded font-semibold text-white h-10 hover:bg-emerald-600'
          type='submit'
        >
          Salvar
        </button>
      </form>
      <pre>{output}</pre>
    </main>
  )
}

export default App
