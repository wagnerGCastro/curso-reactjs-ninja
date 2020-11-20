'use strict'

import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: []
    }
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      ajax().get(`https://api.github.com/users/${value}`)
      .then((result) => {
        this.setState({
          userinfo: {
            username: result.name,
            photo: result.avatar_url,
            login: result.login,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following
          }
        })

      })

      // console.log('repos Lengt -> ', this.state.userinfo.repos > 0);
      // console.log('repos Valor -> ', this.state.userinfo.repos);

      // GET REPOSITORIES - Erro por nao ser assincrona
      // let user =  this.state.userinfo;
      // if(user != 'null' ) {
      //   ajax().get(`https://api.github.com/users/${value}/repos`)
      //     .then((result) => {
      //       // console.log('result.public_repos -< ', result);
      //
      //       let repositories = [];
      //       result.map((repo, index) => (
      //         // console.log(repo.name)
      //         // console.log(repo.description)
      //         //console.log(repo.html_url)
      //         repositories.push({
      //           name: repo.name,
      //           description: repo.description,
      //           url: repo.html_url
      //         })
      //       ))
      //
      //       // console.log(repositories);
      //
      //       this.setState({
      //         repos: repositories
      //       })
      //     })
      //     // console.log('repos Valor -> ', this.state.repos);
      //   }
      // }


      // let user =  this.state.userinfo;
      // if(user != 'null' ) {
        ajax().get(`https://api.github.com/users/${value}/repos`)
          .then((result) => {
            let repositories = [];
            result.map((repo, index) => (
              // console.log(repo.name)
              // console.log(repo.description)
              //console.log(repo.html_url)
              repositories.push({
                name: repo.name,
                description: repo.description,
                url: repo.html_url
              })
            ))

            // console.log(repositories);
            this.setState({
              repos: repositories
            })
          })
          // console.log('repos Valor -> ', this.state.repos);
        }
      // }
  }

  render () {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
      handleSearch={(e) => this.handleSearch(e)} // obs: aqui nao executa a função (arrow Function)
    />
  }
}

export default App
