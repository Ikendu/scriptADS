// Using the Sieve of Eratosthenes algorithm to find prime numbers up to a given number
// function sieveOfEratosthenes(num) {

// Using modular arithmetic to find prime numbers up to a given number
function getPrimeList(num) {
  let list = [2, 3, 5]
  for (let i = 5; i < num; i++) {
    if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0) {
      list.push(i)
    }
  }
  return list
}
console.log(getPrimeList(100))

// Using Square Root method to find prime numbers up to a given number
function isPrime(num) {
  if (num < 2) return false
  if (num == 2) return true
  if (num % 2 == 0) return false

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i == 0) return false
  }
  return true
}
function getPrimes(num) {
  let primes = []
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      primes.push(i)
    }
  }
  return primes
}

console.log(getPrimes(100))
