// Variáveis do jogador e do inimigo
let player = {
    name: "Herói",
    level: 1,
    health: 100,
    xp: 0
  };
  
  let enemy = {
    name: "Goblin",
    health: 50
  };
  
  // Referências aos elementos HTML
  const playerNameElem = document.getElementById("player-name");
  const playerLevelElem = document.getElementById("player-level");
  const playerHealthElem = document.getElementById("player-health");
  const playerXpElem = document.getElementById("player-xp");
  const enemyNameElem = document.getElementById("enemy-name");
  const enemyHealthElem = document.getElementById("enemy-health");
  const battleLogElem = document.getElementById("battle-log");
  
  // Função para atualizar as informações na tela
  function updateGameInfo() {
    playerNameElem.textContent = `Nome: ${player.name}`;
    playerLevelElem.textContent = `Nível: ${player.level}`;
    playerHealthElem.textContent = `Vida: ${player.health}`;
    playerXpElem.textContent = `XP: ${player.xp}`;
    enemyNameElem.textContent = `Inimigo: ${enemy.name}`;
    enemyHealthElem.textContent = `Vida do Inimigo: ${enemy.health}`;
  }
  
  // Função para atacar o inimigo
  function attackEnemy() {
    const damage = Math.floor(Math.random() * 20) + 5; // Ataque aleatório entre 5 e 25
    enemy.health -= damage;
    battleLogElem.innerHTML = `<p>Você atacou o ${enemy.name} e causou ${damage} de dano!</p>`;
    checkBattleStatus();
  }
  
  // Função para curar o jogador
  function healPlayer() {
    const healAmount = Math.floor(Math.random() * 20) + 10; // Cura aleatória entre 10 e 30
    player.health += healAmount;
    battleLogElem.innerHTML = `<p>Você se curou e ganhou ${healAmount} de vida!</p>`;
    checkBattleStatus();
  }
  
  // Função para verificar o estado da batalha (vida do inimigo e do jogador)
  function checkBattleStatus() {
    if (enemy.health <= 0) {
      enemy.health = 0;
      battleLogElem.innerHTML += `<p>Você derrotou o ${enemy.name}!</p>`;
      player.xp += 10; // Ganho de XP ao derrotar o inimigo
      levelUpPlayer();
      resetEnemy();
    }
  
    if (player.health <= 0) {
      player.health = 0;
      battleLogElem.innerHTML += `<p>Você foi derrotado!</p>`;
      // Fim do jogo, o jogador morreu
    }
  
    updateGameInfo();
  }
  
  // Função para aumentar o nível do jogador quando ele ganha XP suficiente
  function levelUpPlayer() {
    if (player.xp >= 100) {
      player.level++;
      player.xp = 0;
      battleLogElem.innerHTML += `<p>Parabéns! Você subiu para o nível ${player.level}!</p>`;
    }
  }
  
  // Função para resetar o inimigo após ser derrotado
  function resetEnemy() {
    enemy.health = 50; // Resetando vida do inimigo
  }
  
  // Configuração dos botões de ação
  document.getElementById("attack-button").addEventListener("click", attackEnemy);
  document.getElementById("heal-button").addEventListener("click", healPlayer);
  
  // Atualizando as informações do jogo inicialmente
  updateGameInfo();
  