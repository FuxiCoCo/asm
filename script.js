const merchants = [
  {
    name: "艾摩斯",
    location: "魔法森林 大木林3",
    priceMap: {
      "頭盔防禦卷軸": 35000,
      "上衣防禦卷軸": 35000,
      "下衣防禦卷軸": 35000,
      "鞋子敏捷卷軸": 35000,
      "耳環智力卷軸": 35000,
      "弓攻擊卷軸": 70000,
      "弩攻擊卷軸": 70000,
      "短杖魔力卷軸": 70000,
      "長杖魔力卷軸": 70000,
      "手槍攻擊卷軸": 70000,
      "指虎攻擊卷軸": 70000
    }
  },
  {
    name: "杜卡斯",
    location: "墮落城市 戰火之地 沼澤地2",
    priceMap: {
      "頭盔防禦卷軸": 35000,
      "頭盔體力卷軸": 35000,
      "下衣防禦卷軸": 35000,
      "套服敏捷卷軸": 35000,
      "鞋子敏捷卷軸": 35000,
      "鞋子跳躍力卷軸": 35000,
      "單手劍攻擊卷軸": 70000,
      "單手斧攻擊卷軸": 70000,
      "單手棍攻擊卷軸": 70000,
      "雙手劍攻擊卷軸": 70000,
      "雙手斧攻擊卷軸": 70000,
      "雙手棍攻擊卷軸": 70000,
      "槍攻擊卷軸": 70000,
      "矛攻擊卷軸": 70000,
      "短劍攻擊卷軸": 70000,
      "拳套攻擊卷軸": 70000
    }
  },
  {
    name: "巴倫",
    location: "天空之城 天空之塔14層",
    priceMap: {
      "頭盔體力卷軸": 35000,
      "上衣防禦卷軸": 35000,
      "下衣防禦卷軸": 35000,
      "套服防禦卷軸": 35000,
      "鞋子敏捷卷軸": 35000,
      "手套敏捷卷軸": 35000,
      "耳環智力卷軸": 35000,
      "盾牌防禦卷軸": 35000,
      "披風魔法防禦卷軸": 35000,
      "披風物理防禦卷軸": 35000,
      "短杖魔力卷軸": 70000,
      "長杖魔力卷軸": 70000,
      "槍攻擊卷軸": 70000,
      "矛攻擊卷軸": 70000,
      "弓攻擊卷軸": 70000,
      "弩攻擊卷軸": 70000,
      "短劍攻擊卷軸": 70000,
      "手槍攻擊卷軸": 70000,
      "拳套攻擊卷軸": 70000,
      "單手劍攻擊卷軸": 70000,
      "單手斧攻擊卷軸": 70000,
      "單手棍攻擊卷軸": 70000,
      "雙手劍攻擊卷軸": 70000,
      "雙手斧攻擊卷軸": 70000,
      "雙手棍攻擊卷軸": 70000
    }
  },
  {
    name: "彌爾格",
    location: "玩具城 愛奧斯塔44層",
    priceMap: {
      "耳環智力卷軸": 34000,
      "頭盔防禦卷軸": 34000,
      "上衣防禦卷軸": 34000,
      "下衣防禦卷軸": 34000,
      "套服防禦卷軸": 34000,
      "鞋子敏捷卷軸": 34000,
      "鞋子跳躍力卷軸": 34000,
      "鞋子速度卷軸": 34000,
      "手套敏捷卷軸": 34000,
      "盾牌防禦卷軸": 34000,
      "披風魔法防禦卷軸": 34000,
      "披風物理防禦卷軸": 34000,
      "短杖魔力卷軸": 69000,
      "長杖魔力卷軸": 69000,
      "槍攻擊卷軸": 69000,
      "矛攻擊卷軸": 69000,
      "弓攻擊卷軸": 69000,
      "弩攻擊卷軸": 69000,
      "短劍攻擊卷軸": 69000,
      "手槍攻擊卷軸": 69000,
      "拳套攻擊卷軸": 69000,
      "指虎攻擊卷軸": 69000,
      "單手劍攻擊卷軸": 69000,
      "單手斧攻擊卷軸": 69000,
      "單手棍攻擊卷軸": 69000,
      "雙手劍攻擊卷軸": 69000,
      "雙手斧攻擊卷軸": 69000,
      "雙手棍攻擊卷軸": 69000
    }
  }
];

const selectedScrolls = new Set();
const scrollQuantities = {};

function buildTable() {
  const types = ["防禦", "攻擊", "能力", "特殊"];
  const parts = [...new Set(scrolls.map(s => s.part))];
  const table = document.getElementById("scroll-table");
  table.innerHTML = "";

  const header = document.createElement("tr");
  header.innerHTML = "<th>部位 \\ 功能</th>" + types.map(t => `<th>${t}</th>`).join("");
  table.appendChild(header);

  for (const part of parts) {
    const row = document.createElement("tr");
    row.innerHTML = `<td><strong>${part}</strong></td>` + types.map(type => {
      const found = scrolls.find(s => s.part === part && s.type === type);
      if (found) {
        return `<td><label><input type="checkbox" onchange="toggleScroll('${found.name}')">
          ${found.name}<br><small>${found.effect}</small></label></td>`;
      } else {
        return "<td>—</td>";
      }
    }).join("");
    table.appendChild(row);
  }
}

function toggleScroll(name) {
  if (selectedScrolls.has(name)) {
    selectedScrolls.delete(name);
    delete scrollQuantities[name];
  } else {
    selectedScrolls.add(name);
    scrollQuantities[name] = 1;
  }
  updateMerchantResults();
  updateQuantityInputs();
}

function updateQuantityInputs() {
  const container = document.getElementById("quantity-inputs");
  container.innerHTML = "";

  Array.from(selectedScrolls).forEach(name => {
    const row = document.createElement("div");
    row.innerHTML = `
      <label>
        ${name}
        <input type="number" value="${scrollQuantities[name] || 1}" min="1"
          onchange="updateScrollQty('${name}', this.value)" />
      </label>
    `;
    container.appendChild(row);
  });

  calculateTotal();
}

function updateScrollQty(name, value) {
  scrollQuantities[name] = parseInt(value) || 1;
  calculateTotal();
}

function updateMerchantResults() {
  const resultDiv = document.getElementById("merchant-results");
  if (selectedScrolls.size === 0) {
    resultDiv.innerHTML = "請選擇卷軸...";
    return;
  }

  const selected = Array.from(selectedScrolls);
  const fullMatch = merchants.filter(m =>
    selected.every(scroll => scroll in m.priceMap)
  );

  let html = "";

  if (fullMatch.length > 0) {
    html += "<p>✔ 有商人可一次買齊：</p>";
    for (const m of fullMatch) {
      html += `<p><strong>${m.name}</strong>（${m.location}）</p><ul>`;
      for (const scroll of selected) {
        html += `<li>${scroll}：${m.priceMap[scroll].toLocaleString()} 楓幣</li>`;
      }
      html += "</ul>";
    }
  } else {
    html += "<p>❌ 沒有商人能一次販售全部卷軸，以下是分批推薦：</p>";
    const merchantMap = {};
    for (const scroll of selected) {
      for (const m of merchants) {
        if (scroll in m.priceMap) {
          if (!merchantMap[m.name]) {
            merchantMap[m.name] = { merchant: m, scrolls: [] };
          }
          merchantMap[m.name].scrolls.push(scroll);
        }
      }
    }

    for (const mName in merchantMap) {
      const { merchant, scrolls } = merchantMap[mName];
      html += `<p><strong>${merchant.name}</strong>（${merchant.location}）</p><ul>`;
      for (const scroll of scrolls) {
        html += `<li>${scroll}：${merchant.priceMap[scroll].toLocaleString()} 楓幣</li>`;
      }
      html += "</ul>";
    }
  }

  resultDiv.innerHTML = html;
}

function calculateTotal() {
  const selected = Object.keys(scrollQuantities);
  const fullMatch = merchants.filter(m =>
    selected.every(scroll => scroll in m.priceMap)
  );

  let html = "";

  if (fullMatch.length > 0) {
    for (const m of fullMatch) {
      let total = 0;
      for (const scroll of selected) {
        total += m.priceMap[scroll] * (scrollQuantities[scroll] || 1);
      }
      html += `<p>${m.name} 需準備總金額：${total.toLocaleString()} 楓幣</p>`;
    }
  } else {
    html += "<p>❌ 無法一次購齊，以下為分批商人金額：</p>";
    for (const m of merchants) {
      const matchedScrolls = selected.filter(s => s in m.priceMap);
      if (matchedScrolls.length === 0) continue;
      let total = 0;
      for (const scroll of matchedScrolls) {
        total += m.priceMap[scroll] * (scrollQuantities[scroll] || 1);
      }
      html += `<p>${m.name}：${total.toLocaleString()} 楓幣（提供 ${matchedScrolls.length} 張）</p>`;
    }
  }

  document.getElementById("total-output").innerHTML = html;
}

buildTable();
