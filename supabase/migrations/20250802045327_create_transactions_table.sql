CREATE TABLE IF NOT EXISTS transactions (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    income BOOL DEFAULT true,
    amount INT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_DATE,
    user_id UUID REFERENCES auth.users (id)
);

ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "User can access their own transactions"
ON transactions
FOR ALL
USING ((auth.uid() = user_id));
