import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isLoading, pokemon, } from '../store/pokedex/pokedexSlice'

export function Pokedex() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          isLoading
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Pokemon
        </button>
      </div>
    </div>
  )
}