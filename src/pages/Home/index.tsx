import { Play } from 'phosphor-react'
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountDownButton,
  TaskInput,
} from './styles'

export function Home() {
  function handleSubmit() {}

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <label>Vou trabalhar em</label>
          <TaskInput
            id="task"
            type="text"
            name="task"
            placeholder="Dê um nome para o seu projeto"
            list="task-suggestions"
          />

          <datalist id="task-suggestions">
            <option value="Trabalho" />
            <option value="Estudo" />
            <option value="Projeto" />
            <option value="Exercício" />
            <option value="Leitura" />
          </datalist>

          <label>durante</label>
          <MinutesAmountInput
            id="minutesAmount"
            type="number"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountDownButton disabled type="submit">
          {' '}
          <Play size={24} /> Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}
