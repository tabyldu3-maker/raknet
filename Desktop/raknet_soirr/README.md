# RakNet 2.52
This is a modified version of RakNet 2.52 used in open.mp.  
Modifications are done to work with SA:MP version of RakNet with some additional security fixes and improvements.

**NOTE:** This is not taken from SA:MP leaked source code.

---

## RakNet Packet Decryptor

Реализация дешифратора пакетов RakNet на основе технического задания.

### Структура пакета

Зашифрованный пакет имеет формат:
- **Header (5 байт)**: `[Маркер 0x1B] + [IDX_0][IDX_1][IDX_2][IDX_3]`
- **Data**: Тело пакета разделено на 4 блока

Размер блока: `blockSize = (TotalSize - 5) / 4`

### Алгоритмы дешифрации

#### 1. Слой XOR (CAuthentication)
- **Ключ**: 87 (0x57)
- **Логика**: Применяется ко всему пакету, кроме первого байта

#### 2. Слой Unshuffle
Восстановление исходного порядка блоков данных с использованием индексов из заголовка.

#### 3. Слой TEA (Tiny Encryption Algorithm)
- **Raw Keys**: 
  - 0x8BB17BDA
  - 0x12048186
  - 0x121C4783
  - 0x74646B86
- **Delta**: 0x9E3779B9
- **Подготовка ключей**: XOR с 0x12913AFB и циклический сдвиг вправо на 19 бит

#### 4. Слой Kyretardize (S-Box)
- **Port Mask**: `mask = ServerPort ^ 0x5555`
- **S-Box**: Используется для финальной подстановки байт

### Компиляция и запуск

#### Linux/macOS
```bash
make
./RakNetDecryptor
```

#### Windows (с MinGW)
```bash
mingw32-make
RakNetDecryptor.exe
```

#### Ручная компиляция
```bash
g++ -std=c++11 -Wall -Wextra -O2 -o RakNetDecryptor RakNetPacketDecryptor.cpp
```

### Использование

Основная функция для дешифрации:
```cpp
int DecryptPacket(uint8_t* buf, int len, uint16_t port);
```

**Параметры:**
- `buf` - буфер с зашифрованным пакетом
- `len` - размер пакета
- `port` - порт сервера для Kyretardize слоя

**Возвращает:** размер расшифрованных данных или -1 при ошибке

### Проверка работы

1. **XOR слой**: После применения второй байт должен стать индексом 0-3
2. **Unshuffle**: Данные должны принять вид типичного сетевого трафика
3. **TEA**: Проверить порядок байт (Endianness) если результат - мусор
4. **Финал**: Первый байт должен быть валидным RakNet ID (0x06, 0x15 и т.д.)

### Структура файлов

- `RakNetPacketDecryptor.cpp` - основная реализация
- `Makefile` - правила сборки
- `README.md` - документация
