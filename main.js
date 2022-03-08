const LinksSocialMidia = {
  github: 'PereiraDenis',
  youtube: 'channel/UCGThX8WV1Ku1OSFnyvQO-DA',
  facebook: 'denispereirinha93',
  instagram: 'denispereirinha93',
  twitter: 'Denis41373255'
}
function changeSocialMidiaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMidia[social]}`
  }
}

changeSocialMidiaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMidia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
