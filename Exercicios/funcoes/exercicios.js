// Pergunta 01
function notasMedia(N1,N2,N3) {
    const mediaDasNotas = (N1 + N2 + N3) / 3
    console.log(`A média desse aluno é ${mediaDasNotas}`)

}
notasMedia(6, 5, 4)

// Pergunta 02
function notasMediaAlterado(nota1,nota2,nota3) {
    const mediaDasNotas = (nota1 + nota2 + nota3) / 3
    return mediaDasNotas
}

function notasMediaFinal(nota1, nota2, nota3, notaFinal) {
    const medianotas = notasMediaAlterado(nota1, nota2, nota3) / 3
    const mediaFinal = (medianotas + notaFinal) / 2
    console.log(mediaFinal)

}

notasMediaFinal(2,4,5,6)