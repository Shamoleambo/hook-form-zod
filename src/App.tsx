import './styles/global.css'

function App() {
  return (
    <main className='h-screen bg-zinc-50 flex items-center justify-center'>
      <form className='flex flex-col gap-4 w-full max-w-xs'>
        <div className='flex flex-col gap-1'>
          <label htmlFor='email'>E-mail</label>
          <input
            className='border border-zinc-200 shadow-sm rounded h10 px-3'
            type='email'
            name='email'
            id='email'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='password'>Senha</label>
          <input
            className='border border-zinc-200 shadow-sm rounded h10 px-3'
            type='password'
            name='password'
            id='password'
          />
        </div>

        <button
          className='bg-emerald-500 rounded font-semibold text-white h-10 hover:bg-emerald-600'
          type='submit'
        >
          Salvar
        </button>
      </form>
    </main>
  )
}

export default App
