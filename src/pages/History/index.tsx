import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>History</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Estudar React</td>
              <td>20 minutos</td>
              <td>Há dois meses</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Estudar TypeScript</td>
              <td>30 minutos</td>
              <td>Há um mês</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Praticar Yoga</td>
              <td>15 minutos</td>
              <td>Há três semanas</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
            <tr>
              <td>Ler um livro</td>
              <td>45 minutos</td>
              <td>Há uma semana</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Fazer compras</td>
              <td>60 minutos</td>
              <td>Há dois dias</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Estudar Node.js</td>
              <td>50 minutos</td>
              <td>Há três dias</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
