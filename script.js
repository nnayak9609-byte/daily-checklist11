body {
  margin:0;
  font-family: Arial;
  background:#0f172a;
  color:white;
}

header {
  text-align:center;
  padding:15px;
  background:linear-gradient(90deg,#6366f1,#22c55e);
}

.container {
  padding:20px;
}

.grid {
  display:grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  gap:15px;
}

.shift {
  background:#111827;
  padding:10px;
  border-radius:10px;
}

.task {
  display:flex;
  gap:5px;
  margin:5px 0;
}

input {
  flex:1;
  padding:5px;
}

button {
  margin-top:5px;
  background:#f59e0b;
  border:none;
  padding:5px;
  border-radius:6px;
  cursor:pointer;
}

.chart-box {
  margin-top:20px;
  background:#111827;
  padding:10px;
  border-radius:10px;
}
